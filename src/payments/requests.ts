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