import { motion } from "motion/react";

const ProjectDetails = ({
    title,
    description,
    subDescription,
    image,
    tags,
    href,
    closeModal,
}) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full px-4 overflow-y-scroll md:overflow-y-auto backdrop-blur-sm">
            <motion.div
                className="relative w-full max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
            >
                {/* Close Button */}
                <button
                    onClick={closeModal}
                    className="absolute p-2 rounded-sm top-3 right-3 sm:top-5 sm:right-5 bg-midnight hover:bg-gray-500"
                >
                    <img src="assets/close.svg" className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Image */}
                <img
                    src={image}
                    alt={title}
                    className="w-full h-auto rounded-t-2xl object-cover max-h-60 sm:max-h-[300px]"
                />

                {/* Content */}
                <div className="p-4 sm:p-6">
                    <h5 className="mb-2 text-xl sm:text-2xl font-bold text-white">{title}</h5>
                    <p className="mb-2 md:mb-3 text-sm sm:text-base font-normal text-neutral-400">{description}</p>

                    {subDescription.map((subDesc, index) => (
                        <p key={index} className="mb-1 md:mb-2 text-sm sm:text-base font-normal text-neutral-400">
                            {subDesc}
                        </p>
                    ))}

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-4 gap-4 sm:gap-0">
                        {/* Tags */}
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <img
                                    key={tag.id}
                                    src={tag.path}
                                    alt={tag.name}
                                    className="rounded-lg size-8 sm:size-10 hover-animation"
                                />
                            ))}
                        </div>

                        {/* View Project Link */}
                        <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 font-medium text-sm sm:text-base cursor-pointer hover-animation"
                        >
                            View Project
                            <img src="assets/arrow-up.svg" className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default ProjectDetails;
