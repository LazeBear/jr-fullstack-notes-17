加密 encrypt
解密 decrypt
哈希 hash

x -> encrypt -> X -> decrypt -> x
x -> hash -> Y -> no way -> x
x' -> hash -> Y' Y === Y'

123456 -> hash -> XYZ
123456 -> hash -> XYZ

add salt

abandon
aaaaaaa
bbbbbbb

salt is randomly generated
123456 + salt1 -> hash -> Salt1XXX <- password in db
123456 + salt2 -> hash -> Salt2YYY

pepper
