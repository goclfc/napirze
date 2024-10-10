export const initBogPayment = async (amount: number, currency?: string) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      amount: amount,
      currency: currency || "GEL",
    });
  
    var requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch("https://napirze.com/api/init-payment", requestOptions);
    return await response.json();
  };
  export const initPaypalPayment = async (amount: number) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      amount: amount,
    });
  
    var requestOptions: RequestInit = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    const response = await fetch("https://napirze.com/api/init-paypal", requestOptions);
    return await response.json();
  };
  export const redirectToPaymantPage = (href: string) => {
    window.open(href, "_blank");
  };
  export const getPosts = async (setData:CallableFunction) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = (await fetch("https://napirze.com/api/posts", requestOptions));
    const data = await response.json();
    setData(data.posts.data)
  };
  export const getPost = async (id:string,setData:CallableFunction) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions: RequestInit = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    const response = (await fetch(`https://napirze.com/api/posts/show/${id}`, requestOptions));
    const data = await response.json();
    console.log(data,'response')
    setData(data.post)
  };