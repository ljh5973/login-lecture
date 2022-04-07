const { transport } = require("winston");
const {createLogger, transports, format} = require("winston");
const {combine, timestamp,printf,label, simple, colorize}= format;
const printFormat=   printf(({timestamp,label, level, message})=>{
    return `${timestamp} [${label}] ${level} : ${message}`
});


const printLogformat={
    file:combine(
    label({
        label:"백엔드 맛보기"
    }),
    timestamp({
        format:"YYYY-MM-DD"
    }),
    printFormat
),
    console: combine(
        colorize(), //
        simple()
)
};

const opts={
    file:new transports.File({
        filename:"access.logger",
        dirname:"./logs",
        level:"info",
        format:printLogformat.file,
    }),
    console:  new transports.Console({
        level:"info",
        format:printLogformat.console,
    })
}

const logger=createLogger({
    transports: [opts.file]
});

if(process.env.NODE_ENV !=="production"){
    logger.add(opts.console);
}

logger.stream={
    write: (message)=>logger.info(message),
};
module.exports=logger;