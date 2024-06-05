// import { toast } from '@toast'
import api from 'axios'

const useAxios = async ({ method, url, body, setLoading, successCallBack }) => {
    setLoading && setLoading(true)
    try {
        const { data } = await api[method](url, body)
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