<?php
    $installer = $this;
    $installer->startSetup();
    $setup = new Mage_Eav_Model_Entity_Setup('core_setup');
    $connection = $installer->getConnection();

    // -------------------------------------------------------------- //
    // Sub-category listing ----------------------------------------- //
    // -------------------------------------------------------------- //

    // Create static cms block
    $connection->insert($installer->getTable('cms/block'), array(
        'title'             => 'Sub Category Listing',
        'identifier'        => 'sub-category-listing',
        'content'           => '{{block type="catalog/navigation" template="catalog/navigation/subcategory-listing.phtml"}}',
        'creation_time'     => now(),
        'update_time'       => now(),
    ));

    $connection->insert($installer->getTable('cms/block_store'), array(
        'block_id'   => $connection->lastInsertId(),
        'store_id'  => 0
    ));

    $installer->endSetup();
?>