import Image from "next/image";
import { useState, useEffect } from "react";

const Leaderboard = () => {
  const [topAuthors, setTopAuthors] = useState([]);

  useEffect(() => {
    fetch("http://138.197.112.193:3000/api/get_leader_users")
      .then((response) => response.json())
      .then((data) => {
        const topAuthorsData = data.slice(0, 3);
        setTopAuthors(topAuthorsData);
      })
      .catch((error) => {
        console.error("Ошибка при получении топ-авторов:", error);
      });
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-[10px] bg-[#18181b] p-2 rounded-xl">
        <div className="flex items-center">
          <Image
            src="/LeftMenu/leader_icon.png"
            width={50}
            height={50}
            alt="leader icon"
          />
          <span className="font-bold text-white dark:text-white">
            ТОП АВТОРОВ
          </span>
        </div>

        <div className="flex flex-col gap-[7px]">
          <div className="flex gap-[7px] py-1 items-center rounded justify-between border-b-[2px] border-[#DAA520]" style={{ background: 'linear-gradient(45deg, #18181b 0%, #18181b 50%, #FFA500 100%)' }}>
            {topAuthors.map((author, index) =>
              index === 0 ? (
                <span key={index} className="text-[#DAA520]">{author.developerName}</span>
              ) : null
            )}
            <Image
              src="/LeftMenu/first_plase.png"
              width={30}
              height={30}
              alt="first plase img"
            />
          </div>
          <div className="flex gap-[7px] py-1 items-center rounded justify-between border-b-[2px] border-[#C0C0C0]" style={{ background: 'linear-gradient(45deg, #18181b 0%, #18181b 50%, #A9A9A9 100%)' }}>
            {topAuthors.map((author, index) =>
              index === 1 ? (
                <span key={index} className="text-[#C0C0C0]">{author.developerName}</span>
              ) : null
            )}
            <Image
              src="/LeftMenu/second_plase.png"
              width={30}
              height={30}
              alt="second plase img"
            />
          </div>
          <div className="flex gap-[7px] py-1 items-center rounded justify-between border-b-[2px] border-[#A0522D]" style={{ background: 'linear-gradient(45deg, #18181b 0%, #18181b 50%, #A0522D 100%)' }}>
            {topAuthors.map((author, index) =>
              index === 2 ? (
                <span key={index} className="text-[#A0522D]">{author.developerName}</span>
              ) : null
            )}
            <Image
              src="/LeftMenu/third_plase.png"
              width={30}
              height={30}
              alt="third plase img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;

// <?
// if(!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) die();
// $aMenuLinksExt = array();

// if($arMenuParametrs = CAllcorp2::GetDirMenuParametrs(__DIR__)){
// 	if($arMenuParametrs['MENU_SHOW_SECTIONS'] == 'Y'){
// 		$arSections = CCache::CIBlockSection_GetList(array('SORT' => 'ASC', 'NAME' => 'ASC', 'CACHE' => array('TAG' => CCache::GetIBlockCacheTag(CCache::$arIBlocks[SITE_ID]['aspro_allcorp2_content']['aspro_allcorp2_services'][0]), 'MULTI' => 'Y')), array('IBLOCK_ID' => CCache::$arIBlocks[SITE_ID]['aspro_allcorp2_content']['aspro_allcorp2_services'][0], 'ACTIVE' => 'Y', 'GLOBAL_ACTIVE' => 'Y', 'ACTIVE_DATE' => 'Y'));
// 		$arSectionsByParentSectionID = CCache::GroupArrayBy($arSections, array('MULTI' => 'Y', 'GROUP' => array('IBLOCK_SECTION_ID')));
// 	}

// 	if($arMenuParametrs['MENU_SHOW_ELEMENTS'] == 'Y'){
// 		$arFilterItem = array('IBLOCK_ID' => CCache::$arIBlocks[SITE_ID]['aspro_allcorp2_content']['aspro_allcorp2_services'][0], 'ACTIVE' => 'Y', 'ACTIVE_DATE' => 'Y', 'INCLUDE_SUBSECTIONS' => 'Y');
// 		$arSelect = array('ID', 'NAME', 'IBLOCK_ID', 'IBLOCK_SECTION_ID', 'DEPTH_LEVEL', 'ACTIVE', 'SORT', 'DETAIL_PAGE_URL', 'PROPERTY_LINK_REGION');
// 		$arItems = CCache::CIBlockElement_GetList(array('SORT' => 'ASC', 'ID' => 'DESC', 'CACHE' => array('TAG' => CCache::GetIBlockCacheTag(CCache::$arIBlocks[SITE_ID]['aspro_allcorp2_content']['aspro_allcorp2_services'][0]), 'MULTI' => 'Y')), $arFilterItem, false, false, $arSelect);

// 		if($arMenuParametrs['MENU_SHOW_SECTIONS'] == 'Y'){
// 			$arItemsBySectionID = CCache::GroupArrayBy($arItems, array('MULTI' => 'Y', 'GROUP' => array('IBLOCK_SECTION_ID')));
// 		}
// 		else{
// 			$arItemsRoot = CCache::CIBlockElement_GetList(array('SORT' => 'ASC', 'ID' => 'DESC', 'CACHE' => array('TAG' => CCache::GetIBlockCacheTag(CCache::$arIBlocks[SITE_ID]['aspro_allcorp2_content']['aspro_allcorp2_services'][0]), 'MULTI' => 'Y')), array('IBLOCK_ID' => CCache::$arIBlocks[SITE_ID]['aspro_allcorp2_content']['aspro_allcorp2_services'][0], 'ACTIVE' => 'Y', 'ACTIVE_DATE' => 'Y', 'SECTION_ID' => 0), false, false, $arSelect);
// 			$arItems = array_merge((array)$arItems, (array)$arItemsRoot);
// 		}
// 	}

// 	if($arSections){
// 		CAllcorp2::getSectionChilds(false, $arSections, $arSectionsByParentSectionID, $arItemsBySectionID, $aMenuLinksExt);
// 	}

// 	if($arItems && $arMenuParametrs['MENU_SHOW_SECTIONS'] != 'Y'){
// 		foreach($arItems as $arItem){
// 			$aMenuLinksExt[] = array($arItem['NAME'], $arItem['DETAIL_PAGE_URL'], array(), array('FROM_IBLOCK' => 1, 'DEPTH_LEVEL' => 1, 'LINK_REGION' => (array)$arItem['PROPERTY_LINK_REGION_VALUE']));
// 		}
// 	}
// }

// $aMenuLinks = array_merge($aMenuLinks, $aMenuLinksExt);
// ?><?
// if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();

// global $APPLICATION;

// if(CModule::IncludeModule("iblock"))
// {

// $IBLOCK_ID = 33;        //здесь необходимо указать ID Вашего инфоблока

// $arOrder = Array("SORT"=>"ASC");
// $arSelect = Array("ID", "NAME", "IBLOCK_ID", "DETAIL_PAGE_URL");
// $arFilter = Array("IBLOCK_ID"=>$IBLOCK_ID, "ACTIVE"=>"Y");
// $res = CIBlockElement::GetList($arOrder, $arFilter, false, false, $arSelect);

//     while($ob = $res->GetNextElement())
//     {
//     $arFields = $ob->GetFields();
//     $aMenuLinksExt[] = Array(
//                 $arFields['NAME'],
//                 $arFields['DETAIL_PAGE_URL'],
//                 Array(),
//                 Array(),
//                 ""
//                 );

//     }

// }

// $aMenuLinks = array_merge($aMenuLinksExt, $aMenuLinks);
// ?>
