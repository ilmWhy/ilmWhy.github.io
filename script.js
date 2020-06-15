fetch('https://indonesia-covid-19.mathdro.id/api')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    document.getElementById("active").innerHTML = data.perawatan.toLocaleString();
    document.getElementById("cases").innerHTML = data.jumlahKasus.toLocaleString();
    document.getElementById("death").innerHTML = data.meninggal.toLocaleString();
    document.getElementById("recovered").innerHTML = data.sembuh.toLocaleString();
});