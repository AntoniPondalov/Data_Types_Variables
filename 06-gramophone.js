function gramophone(band,album,song){
    let duration = (album.length * band.length) * song.length / 2;
    let rotationCount = Math.ceil (duration / 2.5);

    console.log(`The plate was rotated ${rotationCount} times.`)

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs')