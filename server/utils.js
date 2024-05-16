function convertSolidityAbiToHumanReadable(abi) {
    try {
        let abiHumanReadable = [];
        abi.map((item) => {
            if (item.type === "event") {
                const indexedParams = item.inputs
                    .map(
                        (param) =>
                            `${param.type} ${param.indexed ? "indexed " : ""}${param.name}`
                    )
                    .join(", ");
                abiHumanReadable.push(`${item.type} ${item.name}(${indexedParams})`);
            }
        });

        return abiHumanReadable;
    } catch (error) {
        console.error(
            "Error converting Solidity ABI to human-readable ABI:",
            error.message
        );
        return null;
    }
}

async function externalAPICall(url, path) {
    let data = await fetch(url);
    data = await data.json();
    return data[path] ? data[path] : "No data found.";
}

module.exports = {
    convertSolidityAbiToHumanReadable,
    externalAPICall
};