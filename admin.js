let names = document.getElementById("names");
let prices = document.getElementById("Prices")
let descriptions = document.getElementById("descriptions")
let images = document.getElementById("images")
let res = document.getElementById("res")
let arr = [];

// loding
arr = JSON.parse(localStorage.getItem("arr"))
for (let i = 0; i < JSON.parse(localStorage.getItem("arr")).length; i++) {
        
    res.innerHTML += `
    <tr>
    <th scope="row">${i+1}</th>
    <td>
        ${JSON.parse(localStorage.getItem("arr"))[i].name}
    </td>
    <td>
    ${JSON.parse(localStorage.getItem("arr"))[i].price}
    </td>
    <td>${JSON.parse(localStorage.getItem("arr"))[i].description}</td>
    <td>
        <img src="logo.avif" alt="" style="height: 200px;width: 200px;">
    </td>
    <td>
        <button class="btn btn-secondary"> Edit </button>

    </td>
    <td> <button class="btn btn-danger"> Delete </button>
    </td>
</tr>
    `
}
// loding


function add () {
    arr.push({
        name: names.value,
        price: parseFloat(prices.value),
        description: descriptions.value
    })

    localStorage.setItem("arr",JSON.stringify(arr))
    res.innerHTML = ""
    for (let i = 0; i < arr.length; i++) {
        
        res.innerHTML += `
        <tr>
        <th scope="row">${i+1}</th>
        <td>
            ${arr[i].name}
        </td>
        <td>
        ${arr[i].price}
        </td>
        <td>${arr[i].description}</td>
        <td>
            <img src="logo.avif" alt="" style="height: 200px;width: 200px;">
        </td>
        <td>
            <button class="btn btn-secondary"> Edit </button>

        </td>
        <td> <button class="btn btn-danger"> Delete </button>
        </td>
    </tr>
        `
    }
}