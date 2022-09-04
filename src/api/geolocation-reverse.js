export async function GetCityFromPos(pos) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&format=json`)
        if (response.ok) {
            const data = await response.json()
            return data.address.city
        }
        throw "the request faild"
    } catch (error) {
        return Promise.reject(error)
    }
}