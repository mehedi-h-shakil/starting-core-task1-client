import React from "react";
import { useForm } from "react-hook-form";

const Purchased = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-xl py-10">Purchased Products</h2>
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
              <span className="label-text">Purchased Date</span>
            </label>
            <input
              {...register("purchasedDate")}
              type="date"
              name="purchasedDate"
              placeholder="Purchased Date"
              className="input input-bordered uppercase"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Purchased From</span>
            </label>
            <input
              {...register("purchasedFrom")}
              type="text"
              name="purchasedFrom"
              placeholder="Purchased From"
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

export default Purchased;
