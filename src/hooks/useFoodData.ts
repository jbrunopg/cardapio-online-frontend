import axios from "axios";

const API_URL= 'http://localhost:8080'

const fetchData = async (): => {
    const response = axios.get(API_URL + '/food')
}

export function useFoodData({

})