const message = document.querySelector(".result");

setTimeout(() => {
    const fetchedData = async () => {
        try{
            const data = await axios.get("/api/hello")
            message.textContent = JSON.stringify(data.data);
        }catch(error){
            message.textContent = error.response.data;
        }
    }
    
    fetchedData();
}, 3000)