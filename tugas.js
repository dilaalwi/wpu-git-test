const sum = (a,b)=> {
    return a + b
}
const div = (a,b)=> {
    return a/b
}
const kalkulasi = (kata, cb)=> {
    const result = kata + cb(10,11)
    console.log(result)
}
kalkulasi('tambah: ',sum)
kalkulasi('bagi: ', div)