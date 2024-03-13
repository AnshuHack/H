let name = "Mithun";
let email = "mithun.s@pw.live";
let age = "21";

if (typeof name !== "string")
{
    console.log("Name Should be String");
}
else if(typeof email !== "string")
{
    console.log("email Should be A String");
}
else if(typeof age !== "number")
{
    console.log("Age Should be A Number");
}
else
console.log("Yah! All Fields are Valid");