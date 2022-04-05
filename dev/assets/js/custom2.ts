interface ServiceItem {
    id: number; label: string; key: any
}

interface ServiceObject extends Array<ServiceItem>{}

export default function CustomFunc2( input : ServiceObject ){
    input.map( (item: ServiceItem) => {
        console.log(`ITEM: ${item.id}, ${item.label}, ${item.key} ` )
    })
}