import XMLParser from 'react-xml-parser';

import xml from './my_cookbook2019_05_20_12_23_50.xml';

const LoadRecipes = (setAction) => {
    fetch(xml)
        .then((response) => response.text())
        .then((xmlText) => {
            // remove <?xml  ... etc header because react-xml-parser chokes on it
            if (xmlText.toLowerCase().substr(0, 5) == '<?xml') {
                xmlText = xmlText.split(/\?>\r{0,1}\n{0,1}/).slice(1).join('?>\n');
            }
            let recipesData = new XMLParser().parseFromString(xmlText);    // Assume xmlText contains the example XML

            setAction(recipesData);

        }).catch((error) => {
            console.log("Parsing error: ", error);
        });
}

export default LoadRecipes;