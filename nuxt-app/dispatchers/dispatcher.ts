import axios from "axios";

export const get = (url: string) => {
    axios.get(url)
};

export const post = (url: string) => {
    axios.post(url)
};

export const patch = (url: string) => {
    axios.patch(url)
};

export const remove = (url: string) => {
    axios.delete(url)
};