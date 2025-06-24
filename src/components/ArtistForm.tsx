"use client";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const categories = ["Singer", "Dancer", "Speaker", "DJ"];
const languages = ["English", "Hindi", "Telugu", "Tamil"];
const feeRanges = ["₹10K - ₹25K", "₹20K - ₹50K", "₹50K - ₹1L"];

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  bio: yup.string().required("Bio is required"),
  category: yup.array().min(1, "Select at least one category"),
  languages: yup.array().min(1, "Select at least one language"),
  feeRange: yup.string().required("Fee range is required"),
  location: yup.string().required("Location is required"),
  image: yup.mixed().nullable().notRequired(), 
});

type ArtistFormValues = {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  feeRange: string;
  location: string;
  image: FileList | null;
};

export default function ArtistForm() {
  const {
  register,
  handleSubmit,
  formState: { errors },
  reset
} = useForm<ArtistFormValues>({
  resolver: yupResolver(schema),
  defaultValues: {
    name: "",
    bio: "",
    category: [],
    languages: [],
    feeRange: "",
    location: "",
    image: null,
  },
});

  const onSubmit = (data: any) => {
    console.log("Form Submitted:", data);
    alert("Artist submitted successfully!");
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold">🎙️ Artist Onboarding</h2>

      <div>
        <label>Name</label>
        <input
          {...register("name")}
          className="block w-full border p-2 rounded"
        />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>
      </div>

      <div>
        <label>Bio</label>
        <textarea
          {...register("bio")}
          className="block w-full border p-2 rounded"
        />
        <p className="text-red-500 text-sm">{errors.bio?.message}</p>
      </div>

      <div>
        <label>Category</label>
        {categories.map((cat) => (
          <label key={cat} className="block">
            <input
              type="checkbox"
              value={cat}
              {...register("category")}
              className="mr-2"
            />
            {cat}
          </label>
        ))}
        <p className="text-red-500 text-sm">{errors.category?.message}</p>
      </div>

      <div>
        <label>Languages Spoken</label>
        {languages.map((lang) => (
          <label key={lang} className="block">
            <input
              type="checkbox"
              value={lang}
              {...register("languages")}
              className="mr-2"
            />
            {lang}
          </label>
        ))}
        <p className="text-red-500 text-sm">{errors.languages?.message}</p>
      </div>

      <div>
        <label>Fee Range</label>
        <select {...register("feeRange")} className="block w-full border p-2 rounded">
          <option value="">Select Fee Range</option>
          {feeRanges.map((fee) => (
            <option key={fee} value={fee}>
              {fee}
            </option>
          ))}
        </select>
        <p className="text-red-500 text-sm">{errors.feeRange?.message}</p>
      </div>

      <div>
        <label>Location</label>
        <input
          {...register("location")}
          className="block w-full border p-2 rounded"
        />
        <p className="text-red-500 text-sm">{errors.location?.message}</p>
      </div>

      <div>
        <label>Upload Profile Image (optional)</label>
        <input
          type="file"
          {...register("image")}
          className="block w-full border p-2 rounded"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
