let typeOfPackage = "standard";

switch (typeOfPackage) {
    case "standard":
        console.log("Your Package will be delievered in next 3-5 days");
        break;
        case "express":
            console.log("Your Package will be delievered in next 1-2 days");
            break;

    default:
        console.log("Your Package will be delievered over OverNight");
        break;
}