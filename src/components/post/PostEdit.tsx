import { FC, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { Post } from '@/interfaces/interfaces';
import { AppDispatch, RootState } from "@/store/store";
import { setPostId, setPostList } from "@/store/slices/postStoreSlice";
import { addLocalPost, updateLocalPost } from '@/services';

interface Props {
    post?: Post;
}

export const PostEdit: FC<Props> = ({ post }) => {

    const dispatch = useDispatch<AppDispatch>();
    const { postId, postList } = useSelector((state: RootState) => state.postStore);
    const [showSeePost, setShowSeePost] = useState(false);

    const validationSchema = Yup.object({
        title: Yup.string().required('El título es obligatorio'),
        body: Yup.string().required('El contenido es obligatorio'),
    });

    const handleEditSubmit = async (values: Post) => {
        if (!post) {
            dispatch(setPostId(postId + 1));
            dispatch(setPostList([...postList, values]));
            addLocalPost(values);
        } else {
            const newList = postList.map(post => post.id === values.id ? values : post);
            updateLocalPost(values);
            dispatch(setPostList([...newList]));
        }
        setShowSeePost(true);
    };

    return (
        <>
            <Formik
                initialValues={{
                    title: post?.title || '',
                    body: post?.body || '',
                    userId: post?.userId || 1,
                    id: post?.id || postId + 1,
                }}
                validationSchema={validationSchema}
                onSubmit={handleEditSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="space-y-6 mb-4">
                        <div>
                            <label htmlFor="title" className="block text-sm font-semibold text-gray-600 mb-1">
                                Title
                            </label>
                            <Field
                                name="title"
                                type="text"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                            <ErrorMessage name="title" component="p" className="text-red-500 text-sm mt-1" />
                        </div>
                        <div>
                            <label htmlFor="body" className="block text-sm font-semibold text-gray-600 mb-1">
                                Body
                            </label>
                            <Field
                                as="textarea"
                                name="body"
                                rows="5"
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                            />
                            <ErrorMessage name="body" component="p" className="text-red-500 text-sm mt-1" />
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-200 ease-in-out"
                        >
                            {isSubmitting ? 'Saving...' : 'Save changes'}
                        </button>
                    </Form>
                )}
            </Formik>
            {showSeePost &&
                <Link href="/post/listado" className="text-blue-600 hover:text-blue-800 font-semibold transition duration-200 ease-in-out underline">
                    See post
                </Link>
            }
        </>
    )
}
