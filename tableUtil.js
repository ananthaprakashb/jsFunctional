//Function to createTable from data

//var keys = [
//    ["name", "address", "phone"],
//    ["office", "facebook", "manager"]
//    ]
//    , data = {
//    "name": "Ananth",
//    "address": "cupertino",
//    "phone": "408 429 5810",
//    "office": "cisco",
//    "facebook": "ananthaprakashb",
//    "manager": "Reena"
//};
//
//createTable(keys, data);

function createTable(keys, data) {
    return "<table>" + labl.map(function (ele) {
            if (Array.isArray(ele)) {
                return "<tr>" + ele.map(function (el) {
                        return "<td>" + el + "</td><td></td>" + data[el] + "</td>";
                    });
                +"</tr>";
            }
        }) + "</table>";
}
