const adapterOptionsBrands = (info:any, characteristics:any, brand:any) => {

    const objectProductData = {
        kilometros: {
            name: "Kilometraje",
            data: info?.kilometros
        },
        peopleCapacity: {
            name: "Capacidad de personas",
            data: info && "people-capacity" in info ? info["people-capacity"] : undefined
        },
        potencia: {
            name: "Potencia",
            data: info?.potencia
        },
        motor: {
            name: "Motor",
            data: info?.motor
        },
        doors: {
            name: "Puertas",
            data: info?.doors
        },
        bodyType: {
            name: "Tipo de carrocería",
            data: info?.body_tipe
        },
        tractionControl: {
            name: "Tracción",
            data: info?.traction_control
        },
        version: {
            name: "Versión",
            data: info?.version
        },
        finishedPlate: {
            name: "Placa terminada en",
            data: info?.finished_plate
        },
        plateFrom: {
            name: "Placa de",
            data: info?.plate_from
        }
    }

    const dataCharacteristicsArray = characteristics?.map((elementInternals:any) => {
        
        const firstChild = elementInternals.child[0];
        
        const childObject = {
            data: firstChild?.name,
            name: elementInternals?.name 
        };

        const data = {
            [elementInternals?.slug]: childObject
        }

        return data
    })

    const brandArray = brand?.map((elementInternals:any) => {
        return{
            'brand': {
                name: 'Marca',
                data: elementInternals?.name
            }
        }
    })


    const combinedCharacteristics = dataCharacteristicsArray ? Object.assign({}, ...dataCharacteristicsArray) : {};
    const combinedBrand = brandArray ? Object.assign({}, ...brandArray) : {};

    return {
        ...objectProductData,
        ...combinedCharacteristics,
        ...combinedBrand
    }
}

export default adapterOptionsBrands