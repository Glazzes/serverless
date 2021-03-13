// .netlify/functions/hello

const tech = {favTech: ["Spring boot", "React native"]}

exports.handler = async(event, context, callback) => {
    console.log(event);

    return {
        statusCode: 200,
        body: JSON.stringify(tech)
    }
}