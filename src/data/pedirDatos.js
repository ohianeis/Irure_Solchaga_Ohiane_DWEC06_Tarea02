
export async function getAllData(){
    
        try {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await resp.json();
            return data;
          } catch (error) {
            console.error('Error al obtener los datos:', error);
          }
         
        

  
}

