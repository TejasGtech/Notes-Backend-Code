const noteModel = require('../models/Note.model')

const CreateNote = async(req,res)=>{
     
    const{title,notes}=req.body;

    const note =await noteModel.create({
        title,
        notes,
        user:req.user.id
    })

    return res.status(201).json({
        message : 'notes created succefully..',
        title,
        notes,
        

    })
}


const FetchNotes = async(req,res)=>{
    
    const fetchdata = await noteModel.find({
        user : req.user.id
    })

    return res.status(200).json({
        message : 'fetch succefully',
        fetchdata
    })
}

const Delete = async(req,res)=>{
    const id = req.params.id;

    await noteModel.findByIdAndDelete({
        _id:id
    })

    return res.status(200).json({
        message : 'notes deleted succefully'
    })
}

const updateTitle = async(req,res)=>{
    const id = req.params.id;
    const{title}=req.body;

    await noteModel.findByIdAndUpdate({
        _id:id
    },
    {
        title : title
    })

    return res.status(200).json({
        message : 'title update succefully',
        title

    })

}

const updateNote = async(req,res)=>{
    const id = req.params.id;
    const{notes}=req.body;

    await noteModel.findByIdAndUpdate({
        _id:id
    },{
        notes : notes
    })

    return res.status(200).json({
        message : 'Notes update succefully',
        notes
    })
}


module.exports ={CreateNote,FetchNotes,Delete,updateTitle,updateNote}