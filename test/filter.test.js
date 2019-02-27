const test = QUnit.test;

QUnit.module('filter testing');

const images = [
{ title: 'image1', keyword: 'blue', horns: 1 },
{ title: 'image2', keyword: 'blue', horns: 2 },
{ title: 'image3', keyword: 'red', horns: 2 }
];

function filterImages(images, filterBy) {
    return images.filter((image) => {
        let hasKeyword = !filterBy.keyword || image.keyword === filterBy.keyword;

        let hasHorns = !filterBy.horns || image.horns >= filterBy.horns;
        return hasKeyword && hasHorns;
    });
}



test('filter by KEYWORD', assert => {
    //arrange
    const filterBy = { keyword: 'blue' };
    const expected = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image2', keyword: 'blue', horns: 2 },
    ];

    //act
    const result = filterImages(images, filterBy);

    //assert
    assert.deepEqual(result, expected);
});

test('return all w.o. a filter', assert => {
    const filterBy = { keyword: '' };
    const expected = [
        { title: 'image1', keyword: 'blue', horns: 1 },
        { title: 'image2', keyword: 'blue', horns: 2 },
        { title: 'image3', keyword: 'red', horns: 2 },
    ];

    const result = filterImages(images, filterBy);

    assert.deepEqual(result, expected);
});

test('filter by Horns', assert => {
    const filterBy = { horns: 2 };
    const expected = [
        { title: 'image2', keyword: 'blue', horns: 2 },
        { title: 'image3', keyword: 'red', horns: 2 }
    ];

    const result = filterImages(images, filterBy);

    assert.deepEqual(result, expected);
});

test('filter with both parameters', assert => {
    const filterBy = { keyword: 'blue', horns: 2 };
    const expected = [
        { title: 'image2', keyword: 'blue', horns: 2 }
    ];

    const result = filterImages(images, filterBy);

    assert.deepEqual(result, expected);
})