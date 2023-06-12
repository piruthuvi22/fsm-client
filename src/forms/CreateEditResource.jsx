import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addResource, updateResource } from "../apis/apiHandlers";

import "./users.css";

const CreateEditResource = ({ refetchRecords, oldRecord = null }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("oldRecord", oldRecord);
    setName(oldRecord?.name);
    setDescription(oldRecord?.description);
    setQuantity(oldRecord?.quantity);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.length > 20) {
      toast.error("Resource Name should not exceed 20 characters");
      return;
    }
  
    if (description.length > 100) {
      toast.error("Description should not exceed 100 characters");
      return;
    }

    if (!/^[0-9]+$/.test(quantity) || Number(quantity) <= 0) {
      toast.error("Quantity should be a positive integer");
      return;
    }

    setLoading(true);
    if (oldRecord !== null) {
      let resource = await updateResource({
        id: oldRecord.id,
        name,
        description,
        quantity,
      });
      setLoading(false);
      resource.data.id && toast.success("Resource updated successfully");
      resetForm();
      await refetchRecords();
    } else {
      let response = await addResource({
        name,
        description,
        quantity,
      });

      response.data.id && toast.success("Resource created successfully");
      setLoading(false);
      resetForm();
      await refetchRecords();
    }
  };

  const resetForm = () => {
    setDescription("");
    setQuantity("");
    setName("");
  };

  return (
    <div className="add-resource">
      <div className="card fat">
        <div className="card-body">
          <form className="add-new-resource" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Resource Name
              </label>
              <input
                type="text"
                className="form-control mb-2"
                name="name"
                id="name"
                required
                disabled={loading}
                value={name}
                onChange={(event) => setName(event.target.value)}
              />

              <label htmlFor="description" className="form-label">
                Resource description
              </label>
              <textarea
                className="form-control  mb-2"
                name="description"
                id="description"
                rows="5"
                required
                disabled={loading}
                value={description}
                onChange={(event) => setDescription(event.target.value)}
              ></textarea>

              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <textarea
                type="text"
                className="form-control  mb-2"
                name="quantity"
                id="quantity"
                required
                disabled={loading}
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
              />

              <button
                type="submit"
                className={`btn btn-${
                  oldRecord !== null ? "success" : "primary"
                }`}
                disabled={loading}
              >
                {oldRecord !== null ? " Edit" : "Create"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEditResource;
