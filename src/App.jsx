
import { Card } from 'antd';

const songs = [
  { id: 1, name: "My Tam", image: "https://images2.thanhnien.vn/528068263637045248/2023/7/11/my-tam-121-16890426245471165837760.jpeg" },
  { id: 2, name: "Ho Ngoc Ha", image: "https://nld.mediacdn.vn/2020/4/4/13-hnh-1-15860080320041573576397.jpg" },
  { id: 3, name: "Quang Hung MasterD", image: "https://media-cdn-v2.laodong.vn/storage/newsportal/2024/9/5/1389626/Quang-Hung.jpg" },
  { id: 4, name: "Son Tung MTP", image: "https://cdn-media.sforum.vn/storage/app/media/thanhhuyen/%E1%BA%A3nh%20s%C6%A1n%20t%C3%B9ng%20mtp/anh-son-tung-mtp-thumb.jpg" },
  { id: 5, name: "Duc Phuc", image: "https://vcdn1-giaitri.vnecdn.net/2022/09/25/-8643-1664069792.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=bxvSeYSplsy_sUg7fEx6Mg" },
  { id: 6, name: "Justin Bieber", image: "https://nld.mediacdn.vn/2017/14-justin-bieber-1492611358092.jpg" },
];


const { Meta } = Card;


const App = () => (
  <div className="flex gap-[16px]">
    {songs.map((song) => (
      <Card
        key={song.id}
        hoverable
        style={{ width: 240, marginBottom: 16 }}
        cover={<img alt={song.name} src={song.image} />}
      >
        <Meta title={song.name} description="Music Artist" />
      </Card>
    ))}
  </div>
);

export default App;



// const MusicList = () => {
//   return (
//     <div className="w-full max-w-2xl mx-auto p-6">
//       <h1 className="text-2xl font-bold mb-4">Music Player Components</h1>
      
//       <div className="flex justify-between items-center mb-3">
//         <h2 className="text-lg font-semibold">Popular Songs</h2>
//         <button className="text-gray-500 hover:underline">See All</button>
//       </div>
      
//       <div className="bg-white rounded-lg shadow-md divide-y divide-gray-200">
//         {songs.map((song, index) => (
//           <div key={song.id} className="flex items-center p-4 hover:bg-gray-100">
          
//             <span className="text-gray-400 w-8 text-right font-medium">
//               {String(index + 1).padStart(2, "0")}
//             </span>

//             <div className="flex items-center gap-4 flex-1 min-w-0 ml-4">
//               <img
//                 src={song.image}
//                 alt={song.name}
//                 className="w-12 h-12 rounded-lg object-cover"
//               />
//               <div className="min-w-0">
//                 <p className="font-medium truncate">{song.name}</p>
//                 <p className="text-sm text-gray-500">Music</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <button className="text-gray-400 hover:text-red-500">❤️</button>
//               <button className="text-gray-400 hover:text-blue-500">▶</button>
//               <button className="text-gray-400">⋮</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div style={{ padding: 20 }}>
//      <button >hello </button>
//     </div> 

//     </div>
    
    
//   );
// };

// export default MusicList;