import moment from "moment"


const formatDate = function (date: any, format = 'Y-m-d') {
    date = new Date(date.replace(' ', 'T'))
    if (format) {
      return moment(date).format(format)
    }
    return date.toLocaleDateString()
}

export { formatDate };
