import React from "react";
import { useForm } from "react-hook-form";

const Returned = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl py-10">Returned Products</h2>
      <div className="card flex-shrink-0 w-full lg:w-[800px] bg-base-100">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              {...register("productName")}
              type="text"
              name="productName"
              placeholder="Product Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              {...register("quantity")}
              type="text"
              name="quantity"
              placeholder="Quantity"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">MRP</span>
            </label>
            <input
              {...register("mrp")}
              type="text"
              name="mrp"
              placeholder="MRP"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Cost Price</span>
            </label>
            <input
              {...register("costPrice")}
              type="text"
              name="costPrice"
              placeholder="Cost Price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Returned Date</span>
            </label>
            <input
              {...register("returnedDate")}
              type="date"
              name="returnedDate"
              placeholder="Returned Date"
              className="input input-bordered uppercase"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Returned From</span>
            </label>
            <input
              {...register("returnedFrom")}
              type="text"
              name="returnedFrom"
              placeholder="Returned From"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-success">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Returned;

<h2>This is returned</h2>;
