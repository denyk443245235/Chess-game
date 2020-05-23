export const createCages = () => {
    let cages = [];
    for (let j = 1;j < 9;j++) {

            for (let i = 1; i< 9;i++) {
                let color;
                if (j % 2 === 0) {
                    color = i % 2 === 0 ? 'white' : 'brown';
                } else {
                    color = i % 2 === 0 ? 'brown' : 'white';
                }
                cages.push({
                    index: i,
                    color: color
                });
            };


    }

    return cages;
};