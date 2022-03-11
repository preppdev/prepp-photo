import { useRef, useState } from "react";
import Layout from "../../components/layouts/landing";
import ImageSlider from "../../components/image-slider";
const files = [
    {
      id:1,
      imgOne:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62084f386f98284656405b54/1644711737168/Done-2.jpg',
      imgTwo:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62084f307eb94a2d215ecf41/1644711729229/Done-1.jpg'
    },
    {
      id:2,
      imgOne:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62085220770a4c3f1bcdfaa2/1644712481909/Done1-2.jpg',
      imgTwo:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620850ddf2a0d23b226904b4/1644712160610/Done1-1.jpg'
    },
    {
      id:3,
      imgOne:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620856b7d709793a3a455834/1644713657561/Done2-1.jpg',
      imgTwo:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620856bd0184b53a627f6c61/1644713662888/Done2-2.jpg'
    },
    {
      id:4,
      imgOne:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620860a826e4e10a4e69fdee/1644716200966/Done3-1.jpg',
      imgTwo:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620860ac431a8367d7ee69d2/1644716204793/Done3-2.jpg'
    },
    {
      id:5,
      imgOne:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62084f386f98284656405b54/1644711737168/Done-2.jpg',
      imgTwo:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/62084f307eb94a2d215ecf41/1644711729229/Done-1.jpg'
    },
    {
      id:6,
      imgOne:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620856b7d709793a3a455834/1644713657561/Done2-1.jpg',
      imgTwo:'https://static1.squarespace.com/static/60be3f15c04ff53428559e91/t/620856bd0184b53a627f6c61/1644713662888/Done2-2.jpg'
    },
      // {
      //   id:2,
      //   title: 'IMG_4985.HEIC',
      //   size: '3.9 MB',
      //   source:
      //     'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      //   filter:'hue-rotate(90deg)'
      // },
      // {
      //   id:3,
      //   title: 'IMG_4985.HEIC',
      //   size: '3.9 MB',
      //   source:
      //     'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
      //   filter:'sepia(60%)'
      // },
    // More files...
  ]

const PhotoEditing = () => {
    
    return (
        <Layout>
            <div className="text-center">
                <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-7xl pb-5 " >
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Real Estate Photo Editing / Processing - $0.50 each</h2>
                    <p className="text-xl text-gray-500">
                        The team at PREPP.photo strives for excellence in the art of architectural / real estate photo editing, with a special emphasis on realism. Our signature style focuses on natural looking edits, with only the most essential corrective retouching being performed. We want to re-define the normal “cartoonish” look that has become standard in the industry and help real estate agents represent properties in a more authentic way.
                    </p>
                </div>
                <ul role="list" className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
                    {files.map((file) => (
                        <li key={file.id}>
                            <ImageSlider file={file}/>
                        </li>
                    ))}
                </ul>
            </div>
        </Layout>
    );
}
 
export default PhotoEditing;