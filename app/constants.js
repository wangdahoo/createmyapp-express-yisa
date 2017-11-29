module.exports = {
  LOG_FORMAT: `[:date[iso]] ":status :method :url HTTP/:http-version :response-time ms :res[content-length]" ":user-agent" :referrer - :remote-addr - :remote-user`,
  HEADER_TOKEN: 'X-CUSTOM-TOKEN',
  HEADER_TIME: 'X-CUSTOM-TIME'
}
