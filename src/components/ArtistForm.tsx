"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const categories = ["Singer", "Dancer", "Speaker", "DJ"];
const languages = ["English", "Hindi", "Telugu", "Tamil"];
const feeRanges = ["₹10K - ₹25K", "₹20K - ₹50K", "₹50K - ₹1L"];

type ArtistFormValues = {
  name: string;
  bio: string;
  category: string[];
  languages: string[];
  feeRange: string;
  location: string;
  image: FileList | null | undefined; // ✅ FIXED
};


const schema: yup.ObjectSchema<ArtistFormValues> = yup
  .object({
    name: yup.string().required("Name is required"),
    bio: yup.string().required("Bio is required"),
    category: yup
      .array(yup.string().required("Category cannot be empty")) // Explicitly require string in array
      .min(1, "Select at least one category")
      .required("Category is required"),
    languages: yup
      .array(yup.string().required("Language cannot be empty")) // Explicitly require string in array
      .min(1, "Select at least one language")
      .required("Language is required"),
    feeRange: yup.string().required("Fee range is required"),
    location: yup.string().required("Location is required"),
    image: yup.mixed<FileList>().nullable().notRequired(),
  })
  .required();

export default function ArtistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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

  const onSubmit = (data: ArtistFormValues) => {
    console.log("Form Submitted:", data);
    alert("Artist submitted successfully!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 bg-white p-6 rounded-xl shadow-md max-w-3xl mx-auto"
    >
      <h2 className="text-2xl font-bold">🎙️ Artist Onboarding</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          id="name"
          {...register("name")}
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <p className="text-red-500 text-sm mt-1">{errors.name?.message}</p>
      </div>

      <div>
        <label htmlFor="bio" className="block text-sm font-medium text-gray-700">Bio</label>
        <textarea
          id="bio"
          {...register("bio")}
          rows={4}
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <p className="text-red-500 text-sm mt-1">{errors.bio?.message}</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Category</label>
        <div className="mt-1 grid grid-cols-2 gap-2">
          {categories.map((cat) => (
            <label key={cat} className="inline-flex items-center">
              <input
                type="checkbox"
                value={cat}
                {...register("category")}
                className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">{cat}</span>
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm mt-1">{errors.category?.message}</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Languages Spoken</label>
        <div className="mt-1 grid grid-cols-2 gap-2">
          {languages.map((lang) => (
            <label key={lang} className="inline-flex items-center">
              <input
                type="checkbox"
                value={lang}
                {...register("languages")}
                className="form-checkbox h-4 w-4 text-blue-600 border-gray-300 rounded"
              />
              <span className="ml-2 text-gray-700">{lang}</span>
            </label>
          ))}
        </div>
        <p className="text-red-500 text-sm mt-1">{errors.languages?.message}</p>
      </div>

      <div>
        <label htmlFor="feeRange" className="block text-sm font-medium text-gray-700">Fee Range</label>
        <select
          id="feeRange"
          {...register("feeRange")}
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="">Select Fee Range</option>
          {feeRanges.map((fee) => (
            <option key={fee} value={fee}>
              {fee}
            </option>
          ))}
        </select>
        <p className="text-red-500 text-sm mt-1">{errors.feeRange?.message}</p>
      </div>

      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
        <input
          id="location"
          {...register("location")}
          className="mt-1 block w-full border border-gray-300 p-2 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <p className="text-red-500 text-sm mt-1">{errors.location?.message}</p>
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">Upload Profile Image (optional)</label>
        <input
          id="image"
          type="file"
          {...register("image")}
          className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Submit
      </button>
    </form>
  );
}
