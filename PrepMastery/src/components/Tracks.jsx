import React from "react";
import Card from "./Card";

const Tracks = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center py-9">Tracks</h1>
      <h3 className="text-2xl font-bold text-center ">
        Choose your track and get ready for the test
      </h3>
      <div id="Tracks" className=" py-8 flex justify-center">
        <div className="carousel rounded-box p-8">
          <div className="carousel-item p-4 hover:scale-110 transition-all duration-500 cursor-pointer">
            <Card
              data={{
                image:
                  "https://brandeps.com/logo-download/T/TATA-Consultancy-Services-logo-01.png",
                title: "TCShome",
                description:
                  " Learn about the TCS Ninja and Digital Hiring process and get ready for the test.",
              }}
            />
          </div>
          <div className="carousel-item p-4 hover:scale-110 transition-all duration-500 cursor-pointer ">
            <Card
              data={{
                image:
                  "data:image/png;base64,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",
                title: "Tech Mahindra",
                description:
                  " Learn about the Tech Mahindra hiring process and get ready for the test",
              }}
            />
          </div>
          
          <div className="carousel-item p-4 hover:scale-110 transition-all duration-500 cursor-pointer ">
            <Card
              data={{
                image:
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAz1BMVEX////+AAMAAAD+ior+KCj+fX6ioqLc3Nzu7u789/fi2tra0ND/9/ebm5tQUFD79/f/5ub/8/P+k5P/4OA+Pj6AeXn+cXH/zs7/6+v+YWGMiYmoqKj+aWn+LCz+nJz+jIz+goL/tbUvLCzQzMz+p6cuISFOR0dKQEBYUVHLyso0NTX+GBj+IiJlXFz+Q0P+NTX/ra3/y8y8uLh/fHwaCQk/NzdubW3+XV63rq4qHh4dGhouHBwkISGWj4/+oaH+U1MRAACJiopYTEwbAAD+SkqEAQr+AAAIKklEQVR4nO2cCVPbOBSAbQdyNWlIabotKaUbNhwNLF0oaWGbLaX7/3/T+pBkHU9PLxesPe+bYQZsSbG+vqfLmUYRwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzAMwzBMlfj8ZneD/Pbc3dkqHxqv4s0xjOts61XciD5szNVetFNjW2lUNaKosSFXb6NUVm1tZTGVytqQrdRVJqumtvLRqqF+W5P9rKFMVi1tHcVK1gZiK3dVyIr/es5ubQUxrheyoo9rutormilk1c7WUWzIWjMT90UrQlbNMlHlnZS1lq092YiUVavYKs0oWWtkonJVyqqRraOyo6WslWNrv2yilFUbW3oMabJWtLWntaDJin9/6m5tBcOJLmulFYTuypBVC1umEUPWCrG1b9Q3ZNXA1q7ZWVPW0rb2zOqmrMrbsjPNkrXknGi5smVV3NYbu7u2rKXGrX27si2r0rbeOf11ZC2RiW+duo6s+PNTdGsr7LoddmVBpUDsHIwgWZW15eQgLIuYiU4ORqCsimaim4MeWfoKfylXoKxKxhYUVx5ZhEwEXcGy4j+wxxq8KDCvAhdb4/njZDJ5nPePtavtFwattudTrm9OviRJcjtvekoYwK48soKZCLvyyEJjq5UUGBfb4mJHdbaZ6ByoHvcTmxNXx/GlXuD2GvOU8dXTa4+swJzoceWThcUWSZapKuOb907K3GzsxL4/xaPLE1d+WejqFJgHcVmILYqsOSCkichKvgzKtrpQASvraa78spBR3hdXiCx/JhJkHYBCXiCykjvV1DFcwB9bvhxEZXnfvnrjCpPlja2wLNXd0XG73VJ27nRZ99Pp39PpfSnjwGop5exgUYbora8L7/1dwGR5RnnEFSYr/mdVWXLIEZPg4LseHELWWFQ8nyRme1P596LIzJH82zPKY65QWWAm+nMwIMsTW0FZA/F7365xrclqqqqnhtrrxPgzZSHjDHyaH1gHcFnAnIjFVUAWHFuorCwazvVAyhGhtgBlyarFdPnFdhVFd9AHCtC4CslyVqe4q4As0FYwsr45shafXqd8gmVFiZaYcrgbaW3L0Oq6zxJwFZJlrSACrkKyIFuorF5UZtI5+IleWXmSyhFKn/ta/YKW0xaegwRZxrgVchWUFX9wqgTTUBbQU6nEkdXVqkpxj6HnzgH3zsvJ0jIRHdtzgrJcW+HZUMpKToEZzJF1VlyY682M3XouoRwkyVK2wq4IspxMVLJ6GoYsfU06vx6Y1a2lQ/tMDyw5NwDDk0MwB2myxJxIcEWRFb8yq7QShGIFf29cuzVGGyHr08sMtQmcDPSb4MRnEc5Boqw8tiiuSLLij0YVgqz2g329PHUAtzsyKeXEtyFXNFnpnEhyRZNlfiYqS+Tc4KVzRy4GAFmnKut+Fhe+B597j/TcRFm9GakYUdaso1UhRFZW6sy51/XJStTOUMiahB/87eZkpU1ddMLFiLJmPb0KTVaai/176+bAL0uoFFPDA+HJSbFFkdXLCpJsUWRdGK6UrJvRaJT9FOg+yqJ94xjvUpNVjFKdwfGNvJuNavIYlfDkpNgiyBqKor1wUYKsP60q4DpLbp7df6DjhZKVZLOis86S7WULUbn4pxy7U2yFZfVmMiTCsRWWdWVXoZ3B64ylrOwcwt3uyMRslVtDeKdkE87EsKyybNhWUJbjKrzdcZEBk+WhK0tbtssAvQl2MicYWyFZPaN0KBNDsv51qwQjS/yqr8LFpZMIkiXvZjPiBGi8LTbSQG6GbAVkDc3Ss0BsBWS5cUWXpe8LxaXs/M6V1dFkLYDKMouhgSxgC5fVsYsHbOGyIFfhNHztpJKeXa4suSHsa43rrd9CHyjBbaGyhkCF4cqygByMCJElo6PcEcrXDteQLGmyONGRa9mpGv3kcsJ8t4h2mSQLrDjDxi1MFhhXBFnq5Y4YtQbqFU0UOacO6lxVNFi+NBQzojrC8L05xGILkeXkYMHOarLs9RVZlhqlk8vx+fk39XqmOGU3Th1eqnc56v1GWfxh1NdehcHvKwK2/LK8AYmMW35ZP3xVwrK0V386+QLeu91RMh7h+/CiBO+4XxaSvIfLy/LFFWlRCr5ULlz5ZF2WbV1C99E1vbfrPlk9X4UMbyb6ZPldkVbwwNcV0C+GPBjnz8AXbZC4wmx5ZKGTgn+U98jy5iBRVjpuG0cOd01nctNMLOz3NgOz0An45oPSfVhWwJU3tmBZSFylPekWmFfdi63mPFsh/TodjXUZ7a6JZzztNuevf6Uhdzofk3bVsABQFpqDmC1QFurq/wpoC5LVuwjLimfQ6hSS9XXb/doO6rAFlwUVA4DOIABZ8Lq9AgDp5crq0FyBtlxZlXUFZaIji5SDBW4mOrIqmoMFTorZsghje4kTW7asCsdVhr3hs2Qt5crd+ViyKu4q1WF2yJQ1pOegsGVmotn2u6fs15Y49MoKrkVdzPWWIavycZWjj1u6rBVcWcdUuixsj1MhOlpsabKWzsGCHW2fqMl6//T92hKlrVLWSnGV2yrbLWXVx1UUqSBSslZ2pZ9vKVl1chX1rixZK+agsCUzUcp681z92hJXhiziftDHhWhUyKpVXOXsaLLWdKXGrZ2auoo6V0pW7xA1QbKVZ2Iua/d5+7UlroSsteMqI/9uYCarbuOV5DCXtRFXxbi1U19XWSY27M3iGraGqax65mDBYSPaTFzlRLPaxlXOpv7724KPz90dhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmGY6vEfPGB+lcOqsiIAAAAASUVORK5CYII=",
                title: " HSBC ",
                description:
                  " Learn about the HSBC hiring process and get ready for the test.",
              }}
            />
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Tracks;
