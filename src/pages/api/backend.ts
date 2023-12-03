
import type { NextApiRequest, NextApiResponse } from 'next'
let data = [
  {
    "id": "1",
    "name": "Aaron Miles",
    "email": "aaron@mailinator.com",
    "role": "member"
 },
  {
      "id": "2",
      "name": "Aishwarya Naik",
      "email": "aishwarya@mailinator.com",
      "role": "member"
  },
  {
      "id": "3",
      "name": "Arvind Kumar",
      "email": "arvind@mailinator.com",
      "role": "admin"
  },
  {
      "id": "4",
      "name": "Caterina Binotto",
      "email": "caterina@mailinator.com",
      "role": "member"
  },
  {
      "id": "5",
      "name": "Chetan Kumar",
      "email": "chetan@mailinator.com",
      "role": "member"
  },
  {
      "id": "6",
      "name": "Jim McClain",
      "email": "jim@mailinator.com",
      "role": "member"
  },
  {
      "id": "7",
      "name": "Mahaveer Singh",
      "email": "mahaveer@mailinator.com",
      "role": "member"
  },
  {
      "id": "8",
      "name": "Rahul Jain",
      "email": "rahul@mailinator.com",
      "role": "admin"
  },
  {
      "id": "9",
      "name": "Rizan Khan",
      "email": "rizan@mailinator.com",
      "role": "member"
  },
  {
      "id": "10",
      "name": "Sarah Potter",
      "email": "sarah@mailinator.com",
      "role": "admin"
  },
  {
      "id": "11",
      "name": "Keshav Muddaiah",
      "email": "keshav@mailinator.com",
      "role": "member"
  },
  {
      "id": "12",
      "name": "Nita Ramesh",
      "email": "nita@mailinator.com",
      "role": "member"
  },
  {
      "id": "13",
      "name": "Julia Hunstman",
      "email": "julia@mailinator.com",
      "role": "member"
  },
  {
      "id": "14",
      "name": "Juan Alonso",
      "email": "juan@mailinator.com",
      "role": "admin"
  },
  {
      "id": "15",
      "name": "Gabriel Montoya",
      "email": "gabriel@mailinator.com",
      "role": "admin"
  },
  {
      "id": "16",
      "name": "Beatrice Iglesias",
      "email": "beatrice@mailinator.com",
      "role": "admin"
  },
  {
      "id": "17",
      "name": "Sarah Symms",
      "email": "sarah.s@mailinator.com",
      "role": "admin"
  },
  {
      "id": "18",
      "name": "Patrick Pinheiro",
      "email": "patrick@mailinator.com",
      "role": "admin"
  },
  {
      "id": "19",
      "name": "Anand Patel",
      "email": "anand@mailinator.com",
      "role": "member"
  },
  {
      "id": "20",
      "name": "Kishore Kalburgi",
      "email": "kishore@mailinator.com",
      "role": "member"
  },
  {
      "id": "21",
      "name": "Rebecca Norris",
      "email": "rebecca@mailinator.com",
      "role": "member"
  },
  {
      "id": "22",
      "name": "Özgür Başak",
      "email": "ozgur@mailinator.com",
      "role": "member"
  },
  {
      "id": "23",
      "name": "Robin Andersen",
      "email": "robin@mailinator.com",
      "role": "member"
  },
  {
      "id": "24",
      "name": "Nandini Kumar",
      "email": "nandini@mailinator.com",
      "role": "member"
  },
  {
      "id": "25",
      "name": "Nikita Smith",
      "email": "nikita@mailinator.com",
      "role": "member"
  },
  {
      "id": "26",
      "name": "Colton Doe",
      "email": "colton@mailinator.com",
      "role": "member"
  },
  {
      "id": "27",
      "name": "Alain Senna",
      "email": "alain@mailinator.com",
      "role": "member"
  },
  {
      "id": "28",
      "name": "Ashwin Jain",
      "email": "ashwin@mailinator.com",
      "role": "member"
  },
  {
      "id": "29",
      "name": "Seema Bhatt",
      "email": "seema@mailinator.com",
      "role": "member"
  },
  {
      "id": "30",
      "name": "Kayla Scarpinski",
      "email": "kayla@mailinator.com",
      "role": "member"
  },
  {
      "id": "31",
      "name": "Ajay Ghosh",
      "email": "ajay@mailinator.com",
      "role": "member"
  },
  {
      "id": "32",
      "name": "Chris Lindberg",
      "email": "chris@mailinator.com",
      "role": "member"
  },
  {
      "id": "33",
      "name": "Christina Mourujärvi",
      "email": "christina@mailinator.com",
      "role": "member"
  },
  {
      "id": "34",
      "name": "Mikhail Bill",
      "email": "mikhail@mailinator.com",
      "role": "member"
  },
  {
      "id": "35",
      "name": "Eino Göregen",
      "email": "eino@mailinator.com",
      "role": "member"
  },
  {
      "id": "36",
      "name": "Zachariah Johansson",
      "email": "zacharaiah@mailinator.com",
      "role": "member"
  },
  {
      "id": "37",
      "name": "Aimaan Mohammed",
      "email": "aimaan@mailinator.com",
      "role": "admin"
  },
  {
      "id": "38",
      "name": "Aika Tsunoda",
      "email": "aika@mailinator.com",
      "role": "member"
  },
  {
      "id": "39",
      "name": "Kimiko Minamoto",
      "email": "kimiko@mailinator.com",
      "role": "member"
  },
  {
      "id": "40",
      "name": "Alyona Baginskaite",
      "email": "alyona@mailinator.com",
      "role": "member"
  },
  {
      "id": "41",
      "name": "Anirudh Mukherjee",
      "email": "anirudh@mailinator.com",
      "role": "member"
  },
  {
      "id": "42",
      "name": "Alyona Gov",
      "email": "alyonagov@mailinator.com",
      "role": "member"
  },
  {
      "id": "43",
      "name": "Robin Singh",
      "email": "robin@mailinator.com",
      "role": "member"
  },
  {
      "id": "44",
      "name": "Vijay Vasudevan",
      "email": "vijayv@mailinator.com",
      "role": "member"
  },
  {
      "id": "45",
      "name": "Steve Smith",
      "email": "steve@mailinator.com",
      "role": "member"
  },
  {
      "id": "46",
      "name": "Anirudh Banerjee",
      "email": "anirudhb@mailinator.com",
      "role": "member"
  }
]
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if(req.method == 'GET'){
        const totalpages = Math.ceil((data.length)/11);
        const page = Number(req.query.page) || 1;
        
        const pagesize = 11;
        const start = (page-1)*pagesize;
        const end = start + pagesize;
      
        const pagingData = data.slice(start,end);
        
        res.status(200).send({data:pagingData,totalpages:totalpages});
    }
    if(req.method == 'DELETE'){
        
      const page = Number(req.query.page);
      let str = req.query.ids || req.query.id
      let arr = [];
      let k = 0;
      while(k<str.length){
        let j = k;
        let nstr = "";
        while(j<str.length && str[j]!=','){
           nstr+=str[j];
           j++;
        }
        k = j+1;
        arr.push(Number(nstr));
      }
    
     // console.log(arr);
      if(arr.length!=0){
       let newarray = [];
      for(let i = 0;i<data.length;i++){
        let f = false;
        for(let j = 0;j<arr.length;j++){
            if(Number(data[i].id) == arr[j]){
                f = true;
                break;
            }
        }
        if(f == false){
            newarray.push(data[i]);
        }
      }
     
      data = [];
      for(let i = 0;i<newarray.length;i++){
        data[i] = newarray[i];
      }
    //  console.log(data);
       const pagesize = 11;
       const start = (page-1)*pagesize;
       const end = start + pagesize;
       const pagingData = data.slice(start,end);
       const totalpages = Math.ceil((data.length)/11);
       res.status(200).send({data:pagingData,totalpages:totalpages});

      }
      else{
        res.status(404).send({msg:"SEND CORRECT ID"});
      }
       
    }

    if(req.method == 'PUT'){
        let id = req.body.id;
        let page = Number(req.query.page);
       
       for(let i = 0;i<data.length;i++){
        if(data[i] && Number(data[i].id) == Number(id)){
            
            data[i] = req.body;

        }
       }
       const pagesize = 11;
       const start = (page-1)*pagesize;
       const end = start + pagesize;
       const pagingData = data.slice(start,end);
       const totalpages = Math.ceil((data.length)/11);
       res.status(200).send({data:pagingData,totalpages:totalpages});

    }
  
  
  
}
