import {personSchema} from "../schemas/someoneSchema";

const YupPage = () => { 
  const submit = async (e) => {
    e.preventDefault();
    let someone = {
      name: e.target.name.value,
      age: e.target.age.value,
      email: e.target.email.value,
      website: e.target.website.value,
      date: e.target.date.value
    }

    let data = await personSchema.isValid(someone)
    let data2 = await personSchema.validate(someone)
    console.log(data);
    console.log(data2);

    // console.log(someone);
  } 
  return (
      <form  onSubmit={submit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="age">Age</label>
          <input type="number" id="age" name="age" className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="website">Website</label>
          <input id="website" name="website" className="form-control" />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="date">Created at</label>
          <input type="date" id="date" name="date" className="form-control" />
        </div>

        <div className="form-group mb-3">
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </div>
      </form>
    
  );
}

export default YupPage