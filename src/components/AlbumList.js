import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
// import axios from 'axios';
import AlbumDetail from './AlbumDetail';

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    // axios
    //   .get('https://rallycoding.herokuapp.com/api/music_albums')
    //   .then(res => {
    //     console.log(res, "Ressssssssssssssssss");
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });

    setAlbums({
      albumsList: [
        {
          title: 'Taylor Swift',
          artist: 'Taylor Swift',
          url: '',
          image:
            'https://variety.com/wp-content/uploads/2020/01/taylor-swift-variety-cover-5-16x9-1000.jpg?w=1000',
          thumbnail_image:
            'data:image/jpeg;base64,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',
        },
        {
          title: 'Fearless',
          artist: 'Taylor Swift',
          url: '',
          image:
            'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/8/21/1408618840671/18839f21-608b-4acd-a2aa-a944db3e15e7-2060x1236.jpeg?width=445&quality=45&auto=format&fit=max&dpr=2&s=f42d412e4237f7bfd7d7beb2ca918b6c',
          thumbnail_image:
            'data:image/jpeg;base64,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',
        },
        {
          title: 'Speak Now',
          artist: 'Taylor Swift',
          url: '',
          image:
            'https://www.provokr.com/wp-content/uploads/2019/08/taylor-swift-ultimate-album-sheff.jpg',
          thumbnail_image:
            'data:image/jpeg;base64,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',
        },
        {
          title: 'Red',
          artist: 'Taylor Swift',
          url: '',
          image: 'https://i.insider.com/5df3962979d75742a11eef72?width=700',
          thumbnail_image:
            'data:image/jpeg;base64,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',
        },
        {
          title: '1989',
          artist: 'Taylor Swift',
          url: '',
          image:
            'https://thetropixs.com/wp-content/uploads/2020/11/Taylor-Swift.jpeg',
          thumbnail_image:
            'data:image/jpeg;base64,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',
        },
      ],
    });
    //   axios
    //     .get('https://jsonplaceholder.typicode.com/albums')
    //     .then(res => {
    //       console.log(res, 'Resssssss');
    //     })
    //     .catch(err => {
    //       console.log(err, 'errrrrr');
    //     });
  }, []);

  // console.log(albums, 'albumssss');

  return (
    <ScrollView>
      {albums?.albumsList?.map((album, i) => {
        // console.log(album, 'albummmmmmmmmmmmm');
        return <AlbumDetail key={album.title} album={album} />;
      })}
    </ScrollView>
  );
};

export default AlbumList;
