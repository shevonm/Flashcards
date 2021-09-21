import React from "react";
import { Link } from "react-router-dom";
export default function EditDeck () {
  return (
    <>
    <form>
    <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><Link><span class="oi oi-home"></span>Home</Link></li>
    <li class="breadcrumb-item active" aria-current="page">Create Deck</li>
  </ol>
</nav>
<h2>Edit Deck</h2>
      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="Deck Name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Brief description of the deck</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<button type="button" class="btn btn-secondary btn-lg">Cancel</button>
<button type="button" class="btn btn-primary btn-lg">Submit</button>
    </form>
</>
  )
  
}