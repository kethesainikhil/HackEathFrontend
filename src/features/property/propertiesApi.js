export async function addPropertyApi (data){
  const {place,area,bedrooms,price,bathrooms,image,id} = data
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/addProperty/${id}`,{
    method:"POST",
    headers:{   
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      place,
      area,
      bedrooms,
      bathrooms,
      price,
      imageUrl:image
    })
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    return data
  })
}
export async function sendEmailApi (data){
  const {sellerId,buyerId,propertyId} = data
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/sendEmail`,{
    method:"POST",
    headers:{   
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      sellerId,
      buyerId,
      propertyId
    })
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    return data
  })
}
export async function getPropertyApi (id){
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/getProperties/${id}`,{
    method:"GET",
    headers:{   
      "Content-Type":"application/json"
    }
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    
    return data
  })
}
export async function getPropertyByIdApi (id){
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/getPropertiesById/${id}`,{
    method:"GET",
    headers:{   
      "Content-Type":"application/json"
    }
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    
    return data
  })
}
export async function getAllPropertiesApi (){
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/getAllProperties`,{
    method:"GET",
    headers:{   
      "Content-Type":"application/json"
    }
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    
    return data
  })
}
export async function udpateLikesApi (data){
  const{id,likes} = data;
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/updateProperty/${id}`,{
    method:"PATCH",
    headers:{   
      "Content-Type":"application/json"
    },
    body: JSON.stringify({
      "likes":likes
    })
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    
    return data
  })
}
export async function updatePropertyApi (data){
  const{id} = data;
  delete data.id
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/updateProperty/${id}`,{
    method:"PATCH",
    headers:{   
      "Content-Type":"application/json"
    },
    body: JSON.stringify(
      data
    )
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    
    return data
  })
}
export async function deletePropertyApi (id){
  return fetch(`${import.meta.env.VITE_BACKEND_URL}/deleteProperty/${id}`,{
    method:"DELETE",
    headers:{   
      "Content-Type":"application/json"
    },
  }).then((res)=>{
    
    return res.json()
  }).then((data)=>{ 
    
    return data
  })
}