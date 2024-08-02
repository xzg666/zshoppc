const files: Record<string, any> = import.meta.glob(
    './*.json',
    {
        eager: true
    }
)

let messageLangObj = { zh: {}, en: {} }
for (const key in files) {
    const module = files[key]
    Object.assign(messageLangObj.zh, module.zh)
    Object.assign(messageLangObj.en, module.en)
}

console.log('插件', messageLangObj);

export default messageLangObj
