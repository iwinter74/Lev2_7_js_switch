function showtxt() {
    console.log("test")
    let myPacket = document.getElementById("mylist").value*1
    console.log(myPacket)

    switch (myPacket) {
        case 0:
            console.log("Briefe");
            document.getElementById("masse").innerHTML=
            `Brief und Postkarte</b> <br>
            L: 10 - 23,5 cm
            B: 7 - 12,5 cm
            H: bis 1 cm`;
            break;
        case 1:
            console.log("2kg");
            document.getElementById("masse").innerHTML = `<b>DHL Paket 2 kg</b> <br>
            bis 60 x 30 x 15 cm`;
            break;
        case 2:
            console.log("5kg");
            document.getElementById("masse").innerHTML = ' <b>DHL Paket 2 kg</b> <br> bis 120 x 60 x 60 cm';
            break;
        case 3:
            console.log("10kg");
            document.getElementById("masse").innerHTML = `   <b>DHL Paket 10 kg</b> <br>
            bis 120 x 60 x 60 cm`;
            break;
        // default:
        //     console.log("default")
        //     document.getElementById("masse").innerHTML = `<b>Extra große Größe</b>`
    }
}