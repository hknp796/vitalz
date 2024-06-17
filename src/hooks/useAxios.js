import api from 'axios'

const useAxios = async ({ method, url, body, setLoading, successCallBack }) => {
    setLoading && setLoading(true)
    let endPoint = import.meta.env.VITE_REACT_APP_API_BASE_URL+url 
    try {
        const { data } = await api[method](endPoint, body)
        if (!data.success) throw null
        successCallBack(data)
    }
    catch (err) {
        console.log(err,'err');
    }
    finally {
        setLoading && setLoading(false)
    }
}

export default useAxios