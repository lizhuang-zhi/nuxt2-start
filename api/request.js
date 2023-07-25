import myaxios from "@/utils/axios.js"

export function getAllUser() {
    return myaxios.get("/user/alluser")
}

export function updateUser(data) {
    return myaxios.post("/user/update", data)
}