"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FocusCards } from "../ui/focus-cards";

interface Folder {
  id: string;
  name: string;
}

interface FileItem {
  id: string;
  name: string;
  webContentLink: string;
}

const FOLDERS_PER_PAGE = 1;

export default function TeamGallery() {
  const [folders, setFolders] = useState<Folder[]>([]);
  const [currentFolderPage, setCurrentFolderPage] = useState(0);
  const [loadingFolders, setLoadingFolders] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<Folder | null>(null);
  const [files, setFiles] = useState<FileItem[]>([]);
  const [loadingFiles, setLoadingFiles] = useState(false);
  const [folderCache, setFolderCache] = useState<Record<string, FileItem[]>>({});

  // Fetch year folders from API
  useEffect(() => {
    const fetchFolders = async () => {
      setLoadingFolders(true);
      try {
        const res = await fetch("/api/team/");
        const data = await res.json();

        const sortedFolders = (data.folders || []).sort((a: Folder, b: Folder) => {
          const yearA = parseInt(a.name);
          const yearB = parseInt(b.name);
          if (!isNaN(yearA) && !isNaN(yearB)) {
            return yearB - yearA;
          }
          return b.name.localeCompare(a.name);
        });

        setFolders(sortedFolders);
      } catch (error) {
        console.error("Error fetching folders:", error);
      } finally {
        setLoadingFolders(false);
      }
    };

    fetchFolders();
  }, []);

  const totalFolderPages = Math.ceil(folders.length / FOLDERS_PER_PAGE);

  const paginatedFolders = folders.slice(
    currentFolderPage * FOLDERS_PER_PAGE,
    currentFolderPage * FOLDERS_PER_PAGE + FOLDERS_PER_PAGE
  );

  // When paginatedFolders change, auto-select first folder and load files
  useEffect(() => {
    if (paginatedFolders.length > 0) {
      const firstFolder = paginatedFolders[0];
      setSelectedFolder(firstFolder);
      fetchFiles(firstFolder.id);
    }
  }, [currentFolderPage, folders]);

  const fetchFiles = async (folderId: string) => {
    if (folderCache[folderId]) {
      setFiles(folderCache[folderId]);
      return;
    }

    setLoadingFiles(true);
    setFiles([]);

    try {
      const res = await fetch("/api/team/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ folderId }),
      });

      const data = await res.json();
      const fetchedFiles = data.files || [];

      setFiles(fetchedFiles);

      setFolderCache((prev) => ({
        ...prev,
        [folderId]: fetchedFiles,
      }));
    } catch (error) {
      console.error("Error fetching files:", error);
    } finally {
      setLoadingFiles(false);
    }
  };

  return (
    <div className="mx-auto px-4 py-2">
      {/* Year folders */}
      {loadingFolders ? (
        <p className="text-center text-lg text-gold">Loading years...</p>
      ) : (
        <div className="w-full relative">
          <Swiper
            style={{padding: '36px'}}
            slidesPerView={2}
            spaceBetween={20}
            centeredSlides={true}
            modules={[Navigation, Pagination]}
            className="w-full max-w-md md:max-w-lg py-4 relative"
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet custom-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active custom-bullet-active',
            }}
          >
            {folders.map((folder) => (
              <SwiperSlide key={folder.id}>
                <button
                  onClick={() => {
                    setSelectedFolder(folder);
                    fetchFiles(folder.id);
                  }}
                  className={`w-full px-4 py-2 rounded-lg font-semibold text-xl transition
                    ${selectedFolder?.id === folder.id
                      ? 'bg-dull_gold text-blue-dull'
                      : 'bg-blue-dull text-dull_gold'
                    }`}
                >
                  Year {folder.name}
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
           {/* Navigation Buttons (outside the Swiper) */}
          <div className="swiper-button-prev invisible md:visible" style={{ color: '#e6ba63' }}></div>
          <div className="swiper-button-next invisible md:visible" style={{ color: '#e6ba63' }}></div>
          {/* Pagination buttons */}
          <div className="swiper-pagination mt-6" />
        </div>
      )}
      {/* Files */}
      {selectedFolder && (
        <div className="mt-8">
          {loadingFiles ? (
            <p className="text-center text-gold">Loading images...</p>
          ) : files.length > 0 ? (
            <FocusCards cards={files}/>
          ) : (
            <p className="text-center">No images found.</p>
          )}
        </div>
      )}
    </div>
  );
}
