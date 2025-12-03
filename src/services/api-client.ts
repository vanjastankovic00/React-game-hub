import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params:{
        key: "07f4c5119da54acba7835ca07b44a62d"
    }
})