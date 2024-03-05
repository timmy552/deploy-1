const express = require("express")
const app = express()
const path = require("path")
const cors = require("cors")
const connectDB = require("./connectDB")
const users = require("./userSchema")
const form = require("./formSchema")
connectDB()

app.set('views', path.join(__dirname, '../my-app/src'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({extended: true}))


const corOptions = {
    origin: '*',
    credentials: true,
    optionSucessStatus: 200
}

app.use(cors(corOptions))


app.get('/', async (req,res)=>{
   
    res.send('successful')

})


app.post('/signin',  async(req,res)=>{
    try{
        const { username, password, confirmpassword, } = req.body
        console.log({username, password, confirmpassword, })
        const foundUser = await users.findOne({username: username})
        if(foundUser){
            res.status(400).json({"message":"unsuccessfull"})
        } 
       
        const userInfo = new users({
         username: username,
        password: password,
        confirmpassword: confirmpassword,
        role: 'user',
        active: true
    })
    await userInfo.save()
    res.status(200).json({"message":"successfull"})}
    
    catch(error){
        console.log(error)
    }
})



app.get('/form', async (req,res)=>{
   
    res.send('successful')

})

app.post('/form',  async(req,res)=>{
    try{
        const { username, firstname, middlename, lastname,dob,ssn,phonenumber, email } = req.body
        console.log({username, firstname, middlename, lastname,dob,ssn,phonenumber, email })
     
        const Form = new form({
            username: username,
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
            dob:dob,
            ssn:ssn,
            phonenumber:phonenumber,
            email:email
        })
        await Form.save()
    res.status(200).json({"message":"successfull"})
}
    
    catch(error){
        console.log(error)
    }
})


app.get('/login', async (req,res)=>{
    
    res.send("OK")
    
})

let foundUser// logining in the user into his or her dashbord 
  let foundPass
  app.post('/login', async(req,res) => {
    const{username, password} = req.body
    // console.log({username, password})
      foundUser = await form.findOne({username: username})
      foundPass = await users.findOne({password: password})
    // console.log(foundUser)
    if(foundUser && foundPass){
        // req.session.authentication = true
            res.status(200).json({"message":"successfull"})
         }
     else {res.status(401).json({"message": "unsucessfull"})} 

    })
    
    app.get('/dashboard', async (req,res)=>{
    
        res.send(foundUser)
        
    })

const port = 2000
app.listen(port, ()=>{
    console.log(`connecting port ${port}`)
})