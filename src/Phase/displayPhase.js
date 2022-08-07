const { phase } = require('./utils/init.js')
const { ethers } = require('ethers')

// Returns promise that resolves to metadata object
async function displayPhase(address) {

    try {

        let profile_address = await phase.phase(address)

        //  Require profile_address == zero address
        if (profile_address == ethers.constants.AddressZero) {
            return "Phase Doesn't Exist!"
        }

        // Set array items to variables
        let [username, avatar, bio, banner] = await phase.viewProfile(address)

        let links = await phase.viewLinks(address)

        // Build metadata
        let metadata = {
            name : username,
            image : avatar,
            description : bio
        }

        // Set banner as top attribute
        let attributes = [ { "trait_type": "Banner", "value": banner } ]

        // Set links as attributes
        let title, url
        links.forEach(link => {
            [title, url] = link
            attributes.push({ "trait_type": title, "value": url })
        })

        // Add attributes to metadata
        metadata.attributes = attributes
        
        return metadata

    } catch (error) {
        console.log(error)
    }
    
}

exports.displayPhase = displayPhase